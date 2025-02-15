export const sanitizeMessage = (message) => {
  return message.replace(/^[./\\]/, ' $&');
};
