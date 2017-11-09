import React                             from 'react';

export default class RadioButton extends React.Component {

  static propTypes = {
    // Item being displayed
    item: React.PropTypes.object.isRequired,

    // Unique html element id
    id: React.PropTypes.string.isRequired,

    // Whether the material is raw HTML to be embedded "dangerously."
    // isHtml: React.PropTypes.bool,

    selectAnswer: React.PropTypes.func.isRequired,

    // Whether or not input should be disabled
    isDisabled: React.PropTypes.bool,

    // // Whether or not input should be selected
    // checked: React.PropTypes.bool,

    // // Whether or not input should be focused
    // focused: React.PropTypes.bool,

    // // Calls focus to input
    // onFocus: React.PropTypes.func.isRequired
  }

  selectAnswer() {
    if (!this.props.isDisabled) {
      this.props.selectAnswer(this.props.item.id);
    }
  }

  renderMaterial(material, isHtml) {
    if (isHtml) {
      return (
        <div
          className="c-answer-container__content"
          dangerouslySetInnerHTML={{ __html: material }}
        />);
    }

    return (
      <div className="c-answer-container__content">
        <p>{material}</p>
      </div>
    );
  }

  render() {
    const props = this.props;
    const { id, name, isDisabled, isHtml, checked, focused, onFocus } = props;

    return (
      <div className="o-grid">
        <label
          htmlFor={id}
          key={id}
          className={isDisabled  // eslint-disable-line no-nested-ternary
          ? 'c-answer-container--disabled'
          : (focused && !isDisabled
          ? 'c-answer-container is-focused'
          : 'c-answer-container')
          }
          onClick={() => this.selectAnswer()}
        >
          <div className="c-answer-container__radio">
            <div className="c-radio-button">
              <div className="c-radio-button__border">
                <i
                  className={focused && !isDisabled
                  ? 'material-icons radio_button--focused'
                  : 'material-icons'}
                  aria-hidden
                >
                  {checked
                  ? 'radio_button_checked'
                  : 'radio_button_unchecked'}
                </i>
                <input
                  type="radio"
                  disabled={isDisabled}
                  name={name}
                  id={id}
                  checked={checked}
                  onChange={() => this.selectAnswer()}
                  onFocus={() => onFocus(true)}
                />
                <span />
              </div>
            </div>
          </div>
          <div className="c-answer-container__content">
            {this.renderMaterial(props.item.material, isHtml)}
          </div>
        </label>
      </div>
    );
  }
}
