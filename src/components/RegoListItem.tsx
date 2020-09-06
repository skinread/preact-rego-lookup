import { h } from 'preact';
import Expiry from './Expiry';
import { Record } from '../types';

interface Props {
  record: Record;
  select: Function;
}

export default function RegoListItem({ record, select }: Props) {
  return (
    <li class="rego__list-row">
      <button class="rego__option" onClick={() => select()}>
        <h4>{record.plate_number}</h4>
        <h5>{record.vehicle.colour} {record.vehicle.make} {record.vehicle.model}</h5>
        <Expiry rego={record.registration} />
      </button>
    </li>
  );
}