import { Global, css } from '@emotion/core'

const TitoStyle = () => {
  return <Global styles={titoStyle} />
}

export default TitoStyle

const titoStyle = css`
  * {
    box-sizing: border-box;
  }
  .tito-wrapper {
    border: 1px solid #ccc;
    background: rgba(0, 0, 0, 0.02);
    font-family: sans-serif;
    color: #333;
    margin: 20px auto;
    max-width: 900px;
    padding: 10px 0 0 0;
    width: 100%;
  }
  .tito-ticket-list {
    display: block;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  #tito-previous-releases,
  .tito-ticket-list.tito-ticket-waitlist {
    margin: 0;
  }
  .tito-ticket.row {
    display: block !important;
    border-bottom: 1px solid #ccc !important;
    margin: 0 15px !important;
    min-height: 54px !important;
    padding: 10px 0 !important;
  }
  .tito-ticket:after {
    content: '';
    display: table;
    clear: both;
  }
  .tito-ticket-name-wrapper,
  .tito-ticket-price-quantity-wrapper {
    border: none;
    display: block;
    float: left;
    vertical-align: middle;
    width: 100%;
  }
  @media screen and (min-width: 520px) {
    .tito-ticket-name-wrapper,
    .tito-ticket-price-quantity-wrapper {
      width: 50%;
    }
  }
  .tito-ticket-name {
    display: block;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.2;
    margin: 8px 0 5px;
  }
  .tito-ticket-name .label.label-default {
    border: 1px solid #333 !important;
    border-radius: 2px !important;
    color: #333 !important;
    font-size: 10px !important;
    font-weight: bold !important;
    margin-left: 5px !important;
    padding: 2px 5px !important;
    position: relative !important;
    top: -1px !important;
    text-transform: uppercase !important;
  }
  .tito-ticket-name-wrapper .tito-tickets-remaining {
    background: #ddd;
    border: 1px solid rgba(51, 51, 51, 0.2);
    color: #333;
    font-size: 10px;
    padding: 2px 5px;
    position: relative;
    top: -3px;
    margin-left: 10px;
    white-space: nowrap;
  }
  .tito-ticket-description {
    color: #adadad;
    font-size: 12px;
  }
  .tito-degressive-price-desc + .tito-ticket-description {
    margin-top: 2rem;
  }
  .tito-ticket-price-quantity {
    text-align: right;
    width: auto;
  }
  @media screen and (min-width: 520px) {
    .tito-ticket-price-quantity {
      float: right;
    }
  }
  .tito-ticket-price {
    float: left;
    text-align: left;
    width: 50%;
  }
  @media screen and (min-width: 520px) {
    .tito-ticket-price {
      text-align: right;
      width: auto;
    }
  }
  .tito-ticket-quantity {
    float: right;
    min-width: 70px;
  }
  .tito-ticket-quantity span {
    margin: 0 10px;
  }
  input[type='text'].tito-ticket-quantity-field,
  input[type='text'].tito-ticket-donation-field {
    background-color: #fff !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075) !important;
    color: #333 !important;
    display: inline-block !important;
    font-size: 14px !important;
    height: 34px !important;
    line-height: 1.42857143 !important;
    margin: 0 !important;
    padding: 6px 12px !important;
    text-align: center !important;
  }
  input[type='text'].tito-ticket-quantity-field {
    width: 45px !important;
  }
  input[type='text'].tito-ticket-donation-field {
    width: 85px !important;
    margin-left: 6px !important;
  }
  .tito-ticket-price span {
    display: block;
    font-size: 16px;
    line-height: 34px;
  }
  .tito-ticket-vat {
    color: #adadad;
    font-size: 10px;
    padding-bottom: 5px;
  }
  .tito-ticket-status span {
    background: #efefef;
    border-radius: 4px;
    color: #adadad;
    display: inline-block;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    min-width: 90px;
    padding: 0 10px;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
  .btn.btn-default.btn-waitlist {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px !important;
    color: #333;
    font-size: 14px !important;
    height: 34px !important;
    line-height: 1.42857143 !important;
    padding: 6px 12px !important;
    white-space: nowrap !important;
    width: 200px;
  }
  .btn.btn-default.btn-waitlist:hover {
    border: 1px solid #333;
  }
  .tito-discount-code {
    display: block;
    margin: 0 30px;
    padding: 5px 0;
  }
  @media screen and (min-width: 520px) {
    .tito-discount-code {
      float: left;
    }
  }
  .tito-discount-code-label {
    display: none;
  }
  .btn.btn-default.tito-discount-apply-button {
    display: none !important;
  }
  .tito-discount-code .tab-pane.tito-discount-code-show.active {
    display: none !important;
  }
  .tito-discount-code .tab-pane.tito-discount-code-edit {
    display: block !important;
    visibility: visible !important;
  }
  input.form-control.tito-discount-code-field.discount-code-field {
    background: #fff !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075) !important;
    display: inline-block !important;
    font-size: 14px !important;
    height: 34px !important;
    line-height: 1.42857143 !important;
    margin: 5px 0 !important;
    padding: 6px 12px !important;
    width: 100% !important;
  }
  @media screen and (min-width: 520px) {
    input.form-control.tito-discount-code-field.discount-code-field {
      width: 200px !important;
    }
  }
  .tito-discount-code-show {
    padding-top: 15px;
  }
  .tito-discount-code-edit,
  .tito-discount-code-show {
    display: none;
  }
  .tito-discount-code-edit.active,
  .tito-discount-code-show.active {
    display: inline-block;
  }
  .tito-submit-wrapper {
    margin: 0 15px;
    padding: 10px 0;
    text-align: right;
  }
  .tito-submit {
    background: #428bca !important;
    border: 1px solid #357ebd !important;
    border-radius: 4px !important;
    color: #fff !important;
    cursor: pointer !important;
    font-size: 14px !important;
    height: 34px !important;
    line-height: 1.42857143 !important;
    margin: 0 !important;
    padding: 6px 12px !important;
    text-align: center !important;
    width: 100% !important;
  }
  @media screen and (min-width: 520px) {
    .tito-submit {
      width: 100px !important;
    }
  }
  .tito-submit:hover {
    border-color: #285e8e !important;
    background: #3276b1 !important;
  }
  .tito-ticket.tito-locked-ticket > div {
    padding: 10px 0 !important;
  }
  .tito-ticket.tito-locked-ticket label,
  .tito-ticket.tito-locked-ticket span {
    opacity: 0.5 !important;
  }
  .tito-locked-tickets-message p {
    font-size: 14px !important;
    line-height: 1.3 !important;
    opacity: 0.5 !important;
  }
  .tito-badge-link {
    font-size: 12px;
    display: inline-block;
    margin: 15px 0 5px;
    text-align: center;
    width: 100%;
  }
`
