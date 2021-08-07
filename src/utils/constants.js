const MINLENGTH = 8;

const validEmailRegexp = RegExp(/^\w+([.-]?\w+)*(@)\w+([.-]?\w+)*(\.\w{2,3})+$/i);

const validPasswordRegexp = RegExp(/\w{8}/i);

export {
  MINLENGTH, validEmailRegexp, validPasswordRegexp,
};
