import './style.css';
import imgSatellite from './img_icon/satellite.png';
import imgPort from './img_icon/port_1.png';
import imgTrain from './img_icon/train_2.png';
import imgTruck from './img_icon/truck_3.png';
import imgPlane from './img_icon/plane_4.png';

export const City = ({ city }) => {
  const flagUrl = city.Flag;
  console.log(flagUrl);

  //převedení city.Function na array
  const functionToString = (functionType) => {
    return functionType.split('');
  };

  //fuknce na zpracování role měst
  const functionIcon = (functionType) => {
    const type = functionToString(functionType);
    return (
      <>
        {type[0] === '1' ? (
          <img src={imgPort} className="city__icon" alt="port icon"></img>
        ) : null}
        {type[1] === '2' ? (
          <img src={imgTrain} className="city__icon" alt="train icon"></img>
        ) : null}
        {type[2] === '3' ? (
          <img src={imgTruck} className="city__icon" alt="truck icon"></img>
        ) : null}
        {type[3] === '4' ? (
          <img src={imgPlane} className="city__icon" alt="plane icon"></img>
        ) : null}
      </>
    );
  };

  return (
    <div className="city__option">
      <table className="table__City">
        <thead>
          <tr>
            <td rowSpan="2" className="table__City--Flag">
              <img
                src={flagUrl}
                alt={city.CountryCode + ' flag'}
                height="30px"
              />
            </td>
            <td
              className={
                functionToString(city.Function)[0] === '1'
                  ? 'table__row nameStrong'
                  : 'table__row'
              }
            >
              {city.Name}
            </td>
            <td className="table__cell--right table__row">
              {functionIcon(city.Function)}
            </td>
          </tr>
          <tr>
            <td className="table__text">
              <strong>{city.Locode}</strong>
              {city.ZIP === null ? null : `, ZIP: ${city.ZIP}`}
            </td>
            <td className="table__cell--right">
              {city.GPS === '' ? (
                <span className="table__text noGPS">No GPS</span>
              ) : (
                <>
                  <img
                    src={imgSatellite}
                    className="city__icon"
                    alt="satellite icon"
                  ></img>
                  <span className="table__text">{city.GPS}</span>
                </>
              )}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
