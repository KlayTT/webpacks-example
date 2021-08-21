const renderToDom = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

// eslint-disable-next-line import/prefer-default-export
export default renderToDom;
