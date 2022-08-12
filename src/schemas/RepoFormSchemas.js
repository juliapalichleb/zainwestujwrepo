import * as YupObj from "yup";

export const RepoFormSchemas = YupObj.object().shape ({
    email: YupObj.string()
        .email('E-mail is not valid!')
        .required(),
    invested: YupObj.number().positive()
        .min(0.10, 'You can invest amount between 0,10zł - 2500zł')
        .max(2500, 'You can invest amount between 0,10zł - 2500zł')
        .required(),
    });
