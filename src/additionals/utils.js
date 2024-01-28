const sortByProperty = (prop, order = 1) => {
    if (order !== -1) order = 1;
    return (a, b) => {
      if (a[prop] > b[prop]) return 1;
      if (a[prop] < b[prop]) return -1;
      return 0;
    };
  };
  
  export default sortByProperty;  