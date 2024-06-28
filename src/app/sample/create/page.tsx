import PersianDatePicker from "@/components/datePicker/PersianDatePicker";
import { DatePicker } from "antd";
import faIR from "antd/locale/fa_IR"
const Create = () => {
    return ( 
        <PersianDatePicker currentDate={new Date()}/>

     );
}
 
export default Create;