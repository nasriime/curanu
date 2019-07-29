import React, { Component } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

export default class ContactUs extends Component {

    handleSubmit(values){
        console.log(values);
    }

    render() {
        return (
            <div className="contact">
                <h2 className="contact__title">Contact pagina</h2>
                <p className="contact__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis,
                magna nec efficitur tempor, dui eros fringilla tellus, vitae consequat augue dolor at mauris. Nunc tempor rutrum dolor,
                it amet scelerisque lacus feugiat non. Maecenas a tincidunt justo, ac blandit arcu. Sed nec congue ex. 
                Nullam pulvinar libero eu dolor congue commodo. Nam sed pharetra orci. Nunc ultrices sit amet magna non vestibulum. 
                Morbi ut dignissim quam. Etiam eget pellentesque nisi.</p>
                <Formik 
                    initailValues={{naam:'', email:'', onderwerp:'', bericht:''}}
                    onSubmit={this.handleSubmit.bind(this)}
                    validationSchema={Yup.object().shape({
                        naam: Yup.string().required(),
                        email: Yup.string().email().required(),
                        onderwerp: Yup.string().required(),
                        bericht: Yup.string().required()
                    })} 
                    render={ ({
                        handleChange,
                        handleSubmit,
                        isValid,
                        isSubmitting,
                        handleBlur,
                        errors,
                        touched
                    }) => (
                                <form className="contact__form">
                                    <div>
                                        <label htmlFor="naam">Naam:</label>
                                        <input type="text" id="naam" name="naam" 
                                            className={`${errors.naam && touched.naam ? "invalid" : ""} `}
                                            onChange={handleChange} 
                                            onBlur={handleBlur}/>
                                        {errors.naam && touched.naam ? (<div className="error">{errors.naam}</div>) : null}

                                    </div>
                                    <div>
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email"
                                            className={`${errors.email && touched.email ? "invalid" : ""} `}
                                            onChange={handleChange} 
                                            onBlur={handleBlur}/>
                                            {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}
                                    </div>
                                    <div>
                                        <label htmlFor="onderwerp">Onderwerp:</label>
                                        <input type="text" id="onderwerp" name="onderwerp"
                                            className={`${errors.onderwerp && touched.onderwerp ? "invalid" : ""} `}
                                            onChange={handleChange} 
                                            onBlur={handleBlur}/>
                                            {errors.onderwerp && touched.onderwerp ? (<div className="error">{errors.onderwerp}</div>) : null}
                                    </div>
                                    <div>
                                        <label htmlFor="bericht">Bericht:</label>
                                        <textarea id="bericht" name="bericht"
                                            className={`${errors.bericht && touched.bericht ? "invalid" : ""} `}
                                            onChange={handleChange} 
                                            onBlur={handleBlur}/>
                                            {errors.bericht && touched.bericht ? (<div className="error">{errors.bericht}</div>) : null}
                                    </div>
                                    <div className="contact__button">
                                        <button type="button" onClick={handleSubmit} disabled={!isValid || isSubmitting}>Verstuur</button>
                                    </div>
                                </form> 
                                    )
                            }/>
            </div>
        )
    }
}
