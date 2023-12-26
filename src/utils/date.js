const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formatedDate = date.toLocaleDateString('id-ID', options);
  return formatedDate;
};

export default formatDate;
