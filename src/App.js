import React, { Component } from 'react'
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import { cloneDeep } from 'lodash';

class App extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.78,
      longitude: -122.41,
      zoom: 15
    }
  };

  onChangePlace = () => {
      let viewport = cloneDeep(this.state.viewport);
      viewport.latitude = 37.89;
      viewport.longitude = -122.5;
      this.setState({viewport});
  }

  render() {
    return (
      <div>
        <MapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken = "pk.eyJ1Ijoid2FkYWhlc2FtMjEiLCJhIjoiY2pyODJhMDhjMDI2ZTQzb2RkNjgxMHY0diJ9.W9cODURNmVYUekoS1b2LkQ"
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude}>
            <div style={{background: '#B23634', width: 20, height: 20, borderRadius: '50%',}}/>
          </Marker>
        </MapGL>
        <button
          onClick={this.onChangePlace}
        >
          chenge place
        </button>
      </div>

    );
  }
}
export default App;
