var leapSecondDates = [
  "1972-07-01T00:00:00.000Z",
  "1973-01-01T00:00:00.000Z",
  "1974-01-01T00:00:00.000Z",
  "1975-01-01T00:00:00.000Z",
  "1976-01-01T00:00:00.000Z",
  "1977-01-01T00:00:00.000Z",
  "1978-01-01T00:00:00.000Z",
  "1979-01-01T00:00:00.000Z",
  "1980-01-01T00:00:00.000Z",
  "1981-07-01T00:00:00.000Z",
  "1982-07-01T00:00:00.000Z",
  "1983-07-01T00:00:00.000Z",
  "1985-07-01T00:00:00.000Z",
  "1988-01-01T00:00:00.000Z",
  "1990-01-01T00:00:00.000Z",
  "1991-01-01T00:00:00.000Z",
  "1992-07-01T00:00:00.000Z",
  "1993-07-01T00:00:00.000Z",
  "1994-07-01T00:00:00.000Z",
  "1996-01-01T00:00:00.000Z",
  "1997-07-01T00:00:00.000Z",
  "1999-01-01T00:00:00.000Z",
  "2006-01-01T00:00:00.000Z",
  "2009-01-01T00:00:00.000Z",
  "2012-07-01T00:00:00.000Z",
  "2015-07-01T00:00:00.000Z",
  "2017-01-01T00:00:00.000Z"
].map(function (d) {
  return new Date(d).getTime();
});

module.exports = function leapSeconds(date) {

  if ( !date ) {
    date = Date.now();
  } else if ( date instanceof Date ) {
    date = date.getTime()
  } else if ( isFinite(date) ) {
    date = +date;
  } else {
    date = new Date(date).getTime();
  }

  return leapSecondDates.reduce(function(m, d) {
    return date >= d ? m+1 : m;
  }, 10);

};
