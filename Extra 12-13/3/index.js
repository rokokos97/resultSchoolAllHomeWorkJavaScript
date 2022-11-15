let newData = new Date();
let timeNow = newData.getHours();

console.log(timeNow);

class CarService {
  static #DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };
  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours || CarService.#DefaultWorkingHours;
  }
  repairCar(carName) {
    if (!carName) {
      console.error(
        "Вам необходимо указать название машины, чтобы ее отремонтировать"
      );
    } else {
      let newData = new Date();
      let timeNow = newData.getHours();
      let fromHours = Number(this.workingHours.from.split(":")[0]);
      let tillHours = Number(this.workingHours.till.split(":")[0]);
      if (fromHours <= timeNow && timeNow < tillHours) {
        alert(
          `Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`
        );
      } else {
        alert("К сожалению, мы сейчас закрыты. Приходите завтра");
      }
    }
  }
}

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});
carService.repairCar("BMW");
