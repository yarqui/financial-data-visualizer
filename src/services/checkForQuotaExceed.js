const checkForQuotaExceed = (response) => {
  if (response.data.Information) {
    throw new Error(response.data.Information);
  }
};

export default checkForQuotaExceed;
