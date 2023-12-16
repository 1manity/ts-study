// 枚举类型

// 枚举规则：
// 枚举的字段值可以是字符串或数字
// 数字枚举的值会自动自增
// 被数字枚举约束的变量，可以直接赋值为数字
// 数字枚举的编译结果 和 字符串枚举有差异

enum Sex {
  MALE = 1,
  FEMALE = 2,
}
function selectSex(sex: Sex) {
  console.log(sex)
}
selectSex(Sex.MALE)

// require('./test1')

enum Permission {
  Read = 1,
  Write = 2,
  Execute = 4,
  Delete = 8,
}

let p:Permission = Permission.Read | Permission.Write

function hasPermission(permission: Permission, p: Permission) {
  return (permission & p) === p
}

p = p ^ Permission.Write
