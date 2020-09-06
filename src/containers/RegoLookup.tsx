import { Component, h } from 'preact';
import { RegoApiData, Record } from '../types';
import RegoListItem from '../components/RegoListItem';
import RegoDetails from '../components/RegoDetails';

const URL_REGO_API = 'https://dl.dropboxusercontent.com/s/wcp5aajrrx533bp/snsw_registrations_api.json';

interface Props {}

interface State {
  error: boolean;
  loading: boolean;
  registrationData: Record[];
  selectedRego?: Record;
}

export default class RegoLookup extends Component<Props, State> {
  state = {
    error: false,
    loading: true,
    registrationData: []
  }

  fetchRegos(url: string): Promise<Record[]> {
    return fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json() as Promise<RegoApiData>;
      })
      .then(data => {
        return data.registrations;
      })
  }

  setSelectedRego(rego: Record | undefined): void {
    this.setState({
      selectedRego: rego
    });
  }

  async componentWillMount() {
    try {
      const registrationData: Record[] = await this.fetchRegos(URL_REGO_API);
      this.setState({
        loading: false,
        registrationData
      });
    } catch (error) {
      this.setState({
        error: true,
        loading: false
      });
      console.error(error);
    }
  }

  render({}: Props, { error, loading, registrationData = [], selectedRego }: State) {
    return (
      <div class="app">
        <header>
          <h1>Lookup Rego</h1>
          <p>Select a registration to see full details.</p>
        </header>
        <div class="rego" role="main" aria-live="polite">
          {error && <p class="error">Sorry we couldn't retreive any data right now. Please refresh the page to try again.</p>}
          {loading
            ? <p>Loading rego data. Please wait...</p>
            : selectedRego
              ? <div class="rego__details"><RegoDetails record={selectedRego} back={() => this.setSelectedRego(undefined)} /></div>
              : <ul class="rego__list flat">
                  {registrationData.map((record) => (
                    <RegoListItem record={record} select={() => this.setSelectedRego(record)} />
                  ))}
                </ul>
          }
        </div>
        <footer>
          <small>by Sean Kinread</small>
        </footer>
      </div>
    );
  }
}
