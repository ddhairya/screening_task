const db = require("../models");
const User = db.user;
const Campaign = db.campaign;



funRecursiveCampaign = () => {
    try {
      let now = new Date()
      new Date(now.setSeconds(0))
      new Date(now.setMilliseconds(0))
      let hours = now.getHours()
      let mints = now.getMinutes()
      let day = now.getDay()

      Campaign.findAll({ where : { recursive : true} })
      .then(data => {
        if(data.length > 0){
          data.forEach(element => {
            let ele_date = element.dataValues.date
            let ele_hours = ele_date.getHours()
            let ele_mints = ele_date.getMinutes()
            let ele_day = element.dataValues.frequency
            if(ele_day == day && ele_mints == mints && (ele_hours) == hours ){
              console.log(element.dataValues)
            }
          });
        }else{
          console.log("Exit the cron job no recursive data")
        }
      })
      .catch(err => {
        console.log(err, "Exit the cron job")
      });

      Campaign.findAll({ where : { recursive : false} })
      .then(data => {
        
        if(data.length > 0){
          console.log(data)
          data.forEach(element => {
            let ele_date = element.dataValues.date
            console.log(now.getTime() == ele_date.getTime(),now.getTime() , ele_date.getTime(), now, ele_date)
            if(now.getTime() == ele_date.getTime() ){
              console.log(element.dataValues)
            }
          });
        }else{
          console.log("Exit the cron job no one time data")
        }
      })
      .catch(err => {
        console.log(err, "Exit the cron job")
      });


    } catch (error) {
        console.log(error.message);
    }
}

funOneTimeCampaign = () => {
  try {
    let now = new Date()
    new Date(now.setSeconds(0))
    new Date(now.setMilliseconds(0))

    Campaign.findAll({ where : { recursive : false} })
    .then(data => {
      console.log(data)

      if(data.length > 0){
        data.forEach(element => {
          let ele_date = element.dataValues.date
          console.log(now.getTime() == ele_date.getTime(),now.getTime() , ele_date.getTime())
          if(now.getTime() == ele_date.getTime() ){
            console.log(element.dataValues)
          }
        });
      }else{
        console.log("Exit the cron job no one time data")
      }
    })
    .catch(err => {
      console.log(err, "Exit the cron job")
    });
  } catch (error) {
      console.log(error.message);
  }
}


const cronJob = {
  funRecursiveCampaign:funRecursiveCampaign,
  // funOneTimeCampaign:funOneTimeCampaign
};
module.exports = cronJob;
