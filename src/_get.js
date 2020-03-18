export default function _get(object, path, defaultVal) {
  const _path = Array.isArray(path)
    ? path
    : path.split('.').filter(i => i.length)

  if (!_path.length || object === undefined) {
    return object === undefined ? defaultVal : object
  }

  return _get(object[_path.shift()], _path, defaultVal)
}