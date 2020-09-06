import { h, Fragment } from 'preact';
import Expiry from './Expiry';
import { Record } from '../types';

interface Props {
  record: Record;
  back: Function;
}

export default function RegoDetails({ back, record }: Props) {
  const { insurer, registration, vehicle } = record;
  const vin: string = `XXXXXXX${vehicle.vin.substr(vehicle.vin.length - 4, vehicle.vin.length)}`;

  return (
    <div>
      <button class="rego__back-button" onClick={() => back()} type="button">&lt; Back</button>
      <h2>Details for {record.plate_number}</h2>
      <ul class="flat">
        <li>
          <h3 class="rego__details-subtitle">Registration</h3>
          <Expiry rego={registration} />
          <dl>
            <dt>Plate number</dt>
            <dd>{record.plate_number}</dd>
              <dt>Insurer</dt>
            <dd>{insurer.name}</dd>
          </dl>
        </li>
        <li>
          <h3 class="rego__details-subtitle">Vehicle</h3>
          <dl>
            <dt>Make</dt>
            <dd>{vehicle.make}</dd>
            <dt>Model</dt>
            <dd>{vehicle.model}</dd>
            <dt>Colour</dt>
            <dd>{vehicle.colour}</dd>
            <dt>Type</dt>
            <dd>{vehicle.type}</dd>
            <dt>VIN</dt>
            <dd>{vin}</dd>
            <dt>Curb weight</dt>
            <dd>{vehicle.tare_weight}kg</dd>
            {vehicle.gross_mass && (
              <Fragment>
                <dt>Gross mass</dt>
                <dd>{vehicle.gross_mass}kg</dd>  
              </Fragment>
            )}
          </dl>
        </li>
      </ul>
    </div>
  );
}
