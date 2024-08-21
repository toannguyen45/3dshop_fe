import React from 'react'
import './Advise.scss'
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

const Advise = () => {
  return (
    <div className="advise padding-x-default padding-y-default">
      <div className="advise-left">
        <h2>Liên hệ ngay</h2>
        <h2 className="advise-us-title">
          <span className="title-part1">Làm việc</span>
          <span className="title-part2"> cùng chúng tôi</span>
        </h2>
        <p className="content">
          Providing legal advice, contract drafting, compliance assistance,
          intellectual property protection, and other legal support for
          businesses.
        </p>

        <div className="contact">
          <span>
            <PhoneOutlined />
            <a href="tel:0965710419">0965710419</a>
          </span>

          <span>
            <MailOutlined />
            <a href="mailto:bizmax@laralink.com">bizmax@laralink.com</a>
          </span>

          <span>
            <HomeOutlined />
            <a href="#">Yewtree Cottage, Kings Pyon, HR4 8PZ</a>
          </span>
        </div>
      </div>

      <div className="advise-right">
        <div className="card-advise">
          <h2>Liên hệ ngay</h2>
          <form>
            <input type="text" name="name" placeholder="Họ tên" required />

            <input type="email" name="email" placeholder="Email" required />

            <textarea name="message" placeholder="Nội dung" required />

            <button className="contact-us-button" type="submit">
              Gửi ngay
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Advise
