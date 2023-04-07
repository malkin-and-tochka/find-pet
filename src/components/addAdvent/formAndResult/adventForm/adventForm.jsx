import style from './adventForm.module.css'
import {Field, Form, Formik} from "formik";
import {memo, useState} from "react";

const AdventForm = (props) => {
    let [toogle, setTooogle] = useState(false)
    const onDescriptionChange = (e) => {
        props.setDescriptionstate(e.currentTarget.value)
    }
    const onFeatureChange = (e) => {
        props.setFeatureState(e.currentTarget.value)
    }
    const onImgChange = (e) => {
        props.setImgState(e.currentTarget.value)
    }
    const submit = (values) => {
        alert(JSON.stringify(values))
        props.setFeatureState(values.features)
        props.setDescriptionstate(values.description)
        props.setImgState(values.img)
        setTooogle(true)
    }
    return (
        <div className={style.mainWrapper}>
            <div className={style.topInfo}>
                What you do
            </div>
            <Formik
                initialValues={{features: '', description: '', img: ''}}
                onSubmit={submit}>
                {({handleChange, handleSubmit}) =>
                    <Form className={style.FormWrapper}>
                        <FormInput value={props.features} onChange={onFeatureChange} name={'features'}
                                   placeholder={"distinguishing features..."} onBlur={handleChange}
                                   text={"DISTINGUISHING FEATURES"}/>
                        <FormInput value={props.description} name={'description'}
                                   onChange={onDescriptionChange} onBlur={handleChange}
                                   placeholder={"Description..."} text={"DESCRIPTION"}/>
                        <div className={style.inputWrapper}>
                            <input className={style.inputPhoto} onBlur={handleChange} onChange={onImgChange}
                                   type={"file"} name={'img'}/>
                        </div>
                        <div className={style.buttonsRow}>
                            <button type={'submit'}>Result</button>
                            {toogle && <button className={style.post}>Post advent</button>}
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export const FormInput = (props) => {
    return (<div className={style.fieldWrapper}>
        <span>{props.text}</span><br/>
        <Field value={props.value} name={props.name} onChange={props.onChange} className={style.description}
               type={props.type} onBlur={props.onBlur}
               placeholder={props.placeholder}/>
        <br/>
    </div>)
}

const AdventFormWithMemo = memo(AdventForm)

export default AdventFormWithMemo