export class TodoModel {
    constructor(list) {
      return list.map((item) => {
        let obj: any = {};
        for (let key in item) {
          if (key == "_id") {
            obj.id = item[key];
          } else {
            obj[key] = item[key];
          }
        }
        return obj;
      });
    }
  }