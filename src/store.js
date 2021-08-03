export const store = {
    state: {
       // data source
        lists : [{
                  id: 24,
                  name: "Buy Grocery",
                  status: "Todo",
              },
              {
                  id: 25,
                  name: "Send Email",
                  status: "In Progress",
              },
              {
                  id: 28,
                  name: "Finish Assignment",
                  status: "Complete",
              },
              {
                  id: 30,
                  name: "Bake Cake",
                  status: "Todo",
              },
              {
                  id: 31,
                  name: "Write Blog Post",
                  status: "In Progress",
              },
          ]
    }, addList(obj){
        this.state.lists.push(obj);

        console.log(this.state.lists);
        
    }, deleteList(index) {

            this.state.lists = this.state.lists.filter((e, i) => {
                return i != index;
            });
    }, updateList(obj,objIndex) {
        //重寫陣列
        this.state.lists[objIndex] = obj;
    }
}