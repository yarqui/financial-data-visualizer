import axios from "axios";
import incomeData from "../data/INCOME_STATEMENT.json";
import balanceData from "../data/BALANCE_SHEET.json";
import bestMatches from "../data/BEST_MATCHES.json";
import checkForQuotaExceed from "./checkForQuotaExceed";
import handleFetchErrors from "./handleFetchErrors";

const BASE_URL = "https://www.alphavantage.co/query";
const API_KEY = "F1438NA801COBNSH";

export const fetchFinancialData = async (symbol, name) => {
  try {
    // ========== ***START*** COMMENT THIS FOR STATIC DATA
    const responses = await Promise.all([
      axios.get(
        `${BASE_URL}?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${API_KEY}`
      ),
      axios.get(
        `${BASE_URL}?function=BALANCE_SHEET&symbol=${symbol}&apikey=${API_KEY}`
      ),
    ]);

    // Check for API-specific error messages
    responses.forEach((responses) => {
      checkForQuotaExceed(responses);
    });

    const incomeStatement = responses[0]?.data?.quarterlyReports;
    const balanceSheet = responses[1]?.data?.quarterlyReports;

    if (!incomeStatement || !balanceSheet) {
      throw new Error("No data available for this symbol.");
    }
    // ========== ***END*** COMMENT THIS FOR STATIC DATA

    //
    //

    // ========== ***START*** UNCOMMENT THIS FOR STATIC DATA
    // const incomeStatement = incomeData.quarterlyReports;
    // const balanceSheet = balanceData.quarterlyReports;
    // ========== ***END*** UNCOMMENT THIS FOR STATIC DATA

    const parsedData = incomeStatement
      .map((report, index) => ({
        date: report.fiscalDateEnding,
        netIncome: report.netIncome,
        totalRevenue: report.totalRevenue,
        shareholderEquity: balanceSheet[index]?.totalShareholderEquity, // Assume the same order and dates
      }))
      .slice(0, 20); // Consider only the last 5 years

    return { symbol, name, data: parsedData };
  } catch (error) {
    handleFetchErrors(error);
  }
};

export const fetchBySymbolOrName = async (input, signal) => {
  try {
    // ========== ***START*** COMMENT THIS FOR STATIC DATA
    const response = await axios.get(
      `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${input}&apikey=${API_KEY}`,
      { signal }
    );

    checkForQuotaExceed(response);

    return response.data?.bestMatches
      .filter((match) => !match["1. symbol"].includes("."))
      .map((match) => ({
        symbol: match["1. symbol"],
        name: match["2. name"],
      }));
    // ========== ***END*** COMMENT THIS FOR STATIC DATA

    //
    //

    // ========== ***START*** UNCOMMENT THIS FOR STATIC DATA
    // return bestMatches.bestMatches
    //   .filter((match) => !match["1. symbol"].includes("."))
    //   .map((match) => ({
    //     symbol: match["1. symbol"],
    //     name: match["2. name"],
    //   }));
    // ========== ***START*** UNCOMMENT THIS FOR STATIC DATA
  } catch (error) {
    handleFetchErrors(error);
  }
};
