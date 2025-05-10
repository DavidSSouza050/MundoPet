import dayjs from "dayjs"

export const Today = () =>{
  return dayjs(new Date()).format("YYYY-MM-DD")
}