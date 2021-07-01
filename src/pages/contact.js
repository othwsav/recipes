import React from 'react'
import Layout from '../components/Layout'


const Contact = () => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi culpa sequi sed fugiat rem delectus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus, perspiciatis ipsam mollitia tempora inventore corporis quisquam esse velit sapiente!</p>
                    </article>
                    <article className="contact-form">
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">your message</label>
                                <textarea name="message" id="message"/>
                            </div>
                            <button type="submit" className="btn block">submit</button>
                        </form>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default Contact
