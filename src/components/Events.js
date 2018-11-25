import React from "react";

class Events extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="event">
          <div className="container">
            <ul className="row event__list">
              {this.props.eventsDatas.map(event => {
                return (
                  <li className="col-md-4 event__item" key={event.id}>
                    {event.logo ? (
                      <div
                        className="img__box"
                        style={{
                          backgroundImage: `url(
                  ${event.logo.url}
                  )`
                        }}
                      />
                    ) : (
                      <div className="dummy" />
                    )}
                    <div className="event__infos">
                      <h3 className="event__title">{event.name.text}</h3>
                      <p className="event__time">{event.start.local}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Events;
