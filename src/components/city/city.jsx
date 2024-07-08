import './style.css';

export const City = ({ city }) => {
  const functionToString = (functionType) => {
    return functionType.split('');
  };

  const functionIcon = (functionType) => {
    const type = functionToString(functionType);
    return (
      <>
        {type[0] === '1' ? (
          <img
            src="../../components/city/img_icon/port_1.png"
            className="city__icon"
            alt="satellite icon"
          ></img>
        ) : null}
        {type[1] === '2' ? (
          <img
            src="../../components/city/img_icon/train_2.png"
            className="city__icon"
            alt="satellite icon"
          ></img>
        ) : null}
        {type[2] === '3' ? (
          <img
            src="../../components/city/img_icon/truck_3.png"
            className="city__icon"
            alt="satellite icon"
          ></img>
        ) : null}
        {type[3] === '4' ? (
          <img
            src="../../components/city/img_icon/plane_4.png"
            className="city__icon"
            alt="satellite icon"
          ></img>
        ) : null}
      </>
    );
  };

  return (
    <div>
      <table className="table__City">
        <thead>
          <tr>
            <td rowSpan="2" className="table__City--Flag table__0">
              <img
                src={city.Flag}
                alt={city.CountryCode + ' flag'}
                height="30px"
              />
            </td>
            <td
              className={
                functionToString(city.Function)[0] === '1'
                  ? 'table__1 nameStrong'
                  : 'table__1'
              }
            >
              {city.Name}
            </td>
            <td className="table__cell--right table__2">
              {functionIcon(city.Function)}
            </td>
          </tr>
          <tr className="table__tr--1">
            <td className="table__3">
              <strong>{city.Locode}</strong>
              {city.ZIP === null ? null : `, ZIP: ${city.ZIP}`}
            </td>
            <td className="table__cell--right table__4">
              {city.GPS === '' ? (
                <span className="noGPS">No GPS</span>
              ) : (
                <>
                  <img
                    src="../../components/city/img_icon/satellite.png"
                    className="city__icon"
                    alt="satellite icon"
                  ></img>
                  <span>{city.GPS}</span>
                </>
              )}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
