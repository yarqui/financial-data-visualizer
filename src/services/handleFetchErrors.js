const handleFetchErrors = (error) => {
  console.error("Error fetching data:", error);

  // Based on default HTTP status or Axios specifics error handling
  if (error.response) {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    console.error("Data:", error.response.data);
    console.error("Status:", error.response.status);
    console.error("Headers:", error.response.headers);

    throw new Error(`Error: ${error.response.status} ${error.response.data}`);
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error("No response from server");
  } else {
    throw new Error(error.message);
  }
};
export default handleFetchErrors;
