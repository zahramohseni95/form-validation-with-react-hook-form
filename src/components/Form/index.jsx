// styles
import "./index.css";
// hooks
import { useForm } from "react-hook-form";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
        <div className="col-md-6 input-height">
          <label htmlFor="inputName" className="form-label">
            نام:
          </label>
          <input
            {...register("firstName", {
              required: "پر کردن این فیلد الزامی است",
              maxLength: {
                value: 50,
                message: "مقدار این فیلد نمیتواند بیشتر از ۵۰ کاراکتر باشد",
              },
            })}
            type="text"
            className="form-control"
            id="inputName"
          />
          {errors.firstName && (
            <small className="text-danger">{errors.firstName?.message}</small>
          )}
        </div>

        <div className="col-md-6 input-height">
          <label htmlFor="inputLastName" className="form-label">
            نام خانوادگی:
          </label>
          <input
            {...register("lastName", {
              required: "پر کردن این فیلد الزامی است",
              maxLength: {
                value: 50,
                message: "مقدار این فیلد نمیتواند بیشتر از ۵۰ کاراکتر باشد",
              },
            })}
            type="text"
            className="form-control"
            id="inputLastName"
          />
          {errors.lastName && (
            <small className="text-danger">{errors.lastName?.message}</small>
          )}
        </div>

        <div className="col-md-6 input-height">
          <label htmlFor="inputEmail" className="form-label">
            ایمیل:
          </label>
          <input
            {...register("email", {
              required: "پر کردن این فیلد الزامی است",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "یک ایمیل صحیح وارد کنید",
              },
            })}
            type="email"
            className="form-control"
            id="inputEmail"
          />
          {errors.email && (
            <small className="text-danger">{errors.email?.message}</small>
          )}
        </div>

        <div className="col-md-6 input-height">
          <label htmlFor="inputPassword" className="form-label">
            رمزعبور:
          </label>
          <input
            {...register("password", {
              required: "پر کردن این فیلد الزامی است",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "حداقل ۸ کاراکتر، یک حرف، یک عدد و یک علامت خاص.",
              },
            })}
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="شامل حداقل ۸ کاراکتر، یک حرف، یک عدد و یک علامت خاص"
          />
          {errors.password && (
            <small className="text-danger">{errors.password?.message}</small>
          )}
        </div>
        <div className="col-md-4 input-height">
          <label htmlFor="inputNationalCode" className="form-label">
            کد ملی:
          </label>
          <input
            {...register("nationalCode", {
              required: "پر کردن این فیلد الزامی است",
              pattern: {
                value: /^([0-9]){10}$/,
                message: "کدملی معتبر وارد کنید",
              },
            })}
            type="number"
            className="form-control"
            id="inputNationalCode"
          />
          {errors.nationalCode && (
            <small className="text-danger">{errors.nationalCode?.message}</small>
          )}
        </div>
        <div className="col-md-4 input-height">
          <label htmlFor="inputPhoneNumber" className="form-label">
            شماره موبایل:
          </label>
          <input
            {...register("phoneNumber", {
              required: "پر کردن این فیلد الزامی است",
              pattern: {
                value: /09(0[0-9]|1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
                message: "یک شماره معتبر وارد کنید",
              },
            })}
            type="tel"
            className="form-control"
            id="inputPhoneNumber"
            placeholder="09121234567"
          />
          {errors.phoneNumber && (
            <small className="text-danger">{errors.phoneNumber?.message}</small>
          )}
        </div>
        <div className="col-md-4 input-height">
          جنسیت:
          <div className="form-check form-check-reverse">
            <input
              {...register("gender", {
                required: "پر کردن این فیلد الزامی است",
              })}
              className="form-check-input"
              type="radio"
              id="radioWoman"
              value="woman"
            />
            <label className="form-check-label" htmlFor="radioWoman">
              زن
            </label>
          </div>
          <div className="form-check form-check-reverse">
            <input
              {...register("gender", {
                required: "پر کردن این فیلد الزامی است",
              })}
              className="form-check-input"
              type="radio"
              id="radioMan"
              value="man"
            />
            <label className="form-check-label" htmlFor="radioMan">
              مرد
            </label>
            {errors.gender && (
              <p className="text-danger">{errors.gender?.message}</p>
            )}
          </div>
        </div>

        <div className="col-md-6 input-height">
          <label htmlFor="inputGrade" className="form-label">
            تحصیلات:
          </label>
          <select
            {...register("grade")}
            id="inputGrade"
            className="form-select"
            placeholder="انتخاب کنید"
          >
            <option>زیردیپلم</option>
            <option>دیپلم</option>
            <option>کاردانی</option>
            <option>کارشناسی</option>
            <option>کارشناسی ارشد و بالاتر</option>
          </select>
        </div>
        <div className="col-md-6 input-height">
          <label htmlFor="inputAccount" className="form-label">
            نوع حساب:
          </label>
          <select
            {...register("account")}
            id="inputAccount"
            className="form-select"
          >
            <option>دانش آموزی</option>
            <option>شخصی</option>
            <option>حرفه ای</option>
          </select>
        </div>

        <div className="col-md-6 input-height">
          <label htmlFor="inputCity" className="form-label">
            شهر:
          </label>
          <input
            {...register("city", {
              required: "پر کردن این فیلد الزامی است",
              minLength: {
                value: 2,
                message: "این فیلد حداقل باید دو کاراکتر داشته باشد",
              },
              maxLength: {
                value: 20,
                message: "این فیلد حداکثر میتواند بیست کاراکتر داشته باشد",
              },
            })}
            type="text"
            className="form-control"
            id="inputCity"
          />
          {errors.city && <p className="text-danger">{errors.city?.message}</p>}
        </div>
        <div className="col-md-6 input-height">
          <label htmlFor="inputPostalCode" className="form-label">
            کدپستی:
          </label>
          <input
            {...register("postalCode", {
              required: "پر کردن این فیلد الزامی است",
              pattern: {
                value: /(?<!\d)\d{10}(?!\d)/,
                message: "یک کدپستی معتبر وارد کنید",
              },
            })}
            type="number"
            className="form-control"
            id="inputPostalCode"
          />
          {errors.postalCode && (
            <p className="text-danger">{errors.postalCode?.message}</p>
          )}
        </div>

        <div className="col-12 input-height">
          <label htmlFor="inputAddress" className="form-label">
            آدرس:
          </label>
          <input
            {...register("address", {
              required: "پر کردن این فیلد ضروری است",
              minLength: {
                value: 15,
                message: "این فیلد حداقل باید 15 کاراکتر داشته باشد",
              },
              maxLength: {
                value: 100,
                message: "این فیلد حداکثر میتواند 100 کاراکتر داشته باشد",
              },
            })}
            type="text"
            className="form-control"
            id="inputAddress"
          />
          {errors.address && (
            <p className="text-danger">{errors.address?.message}</p>
          )}
        </div>

        <div className="col-12 input-height">
          <label htmlFor="inputDetails" className="form-label">
            توضیحات:
          </label>
          <textarea
            {...register("details", {
              maxLength: {
                value: 500,
                message: "این فیلد حداکثر میتواند 500 کاراکتر داشته باشد",
              },
            })}
            className="form-control"
            id="inputDetails"
            rows="3"
          ></textarea>
        </div>

        <div className="col-12 input-height">
          <div className="form-check form-check-reverse">
            <input
              {...register("termsConditions", {
                required: "قوانین و مقررات باید پذیرفته شود",
              })}
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />

            <label className="form-check-label" htmlFor="gridCheck">
              قوانین و مقررات را میپذیرم.
            </label>
            {errors.termsConditions && (
              <p className="text-danger">{errors.termsConditions?.message}</p>
            )}
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary mb-5">
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
}
