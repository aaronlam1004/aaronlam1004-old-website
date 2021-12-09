var date = new Date();
// console.log(date.getHours());
var globals = {
    mode:(date.getHours < 9 || date.getHours() < 17) ? 0 : 1
}
export default globals;
