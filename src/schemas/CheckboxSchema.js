import * as YupObj from "yup";

export const CheckboxSchema = YupObj.object().shape ({
    checkboxElement:YupObj.boolean().oneOf([true], "You must confirm to submit information")
});
