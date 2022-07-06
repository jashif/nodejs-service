enum Level {
  INFO = 1,
  ERROR = 2,
  WARN = 3,
}
const Log = (event: string, message: string, level = Level) => {
  console.log(`${event} - ${level} - ${message}`);
};
export default Log;
