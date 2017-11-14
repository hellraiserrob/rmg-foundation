import { Component, OnInit, HostListener } from '@angular/core';
import { Map, tileLayer, marker, markerClusterGroup, layerGroup, icon, polyline, polygon } from 'leaflet';

import { Layer } from './layer'
import { LatLng } from './latlng'

@Component({
    selector: 'maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    map: any;
    layers: Layer[] = [];
    newLayerTitle: string = '';
    method: string = 'marker';
    selectedLayer: number = 0;


    isEditing: boolean = false;
    temp: LatLng[] = []
    tempGroup: any;

    @HostListener('window:keyup', ['$event'])

    keyEvent(event: KeyboardEvent) {

        if (event.key === 'Enter') {

            switch (this.method) {

                case 'polyline':
                    this.isEditing = true
                    this.addPolyline()
                    break;

                case 'polygon':
                    this.isEditing = true
                    this.addPolygon();
                    break;

                default:
                    break;

            }

            this.clearTemp()
            this.isEditing = false
            this.temp.length = 0

        }

        if (event.key === 'Escape') {
              this.clearTemp()
              this.isEditing = false
              this.temp.length = 0

        }


    }

    ngOnInit(): void {

        this.map = new Map('map').setView([51.505, -0.09], 13)

        tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: '',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoicm9iZXJ0amFtZXNwaGlsbGlwcyIsImEiOiJjaXVzNnJqaTgwMDByMnlvMmhwMWJka3NzIn0.h605O6VaREYCCB0VXqggdQ'
        }).addTo(this.map);

        this.tempGroup = layerGroup().addTo(this.map)

        this.layers.push({
            name: 'Test Group 1',
            group: layerGroup().addTo(this.map)
        })

        this.map.on('click', (e) => {

            // console.log(`$method: ${this.method}`)

            switch (this.method) {

                case 'marker':
                    this.addMarker(e);
                    break;

                case 'polyline':
                    this.isEditing = true
                    this.addTemp(e)
                    this.addTempPolyline()
                    break

                case 'polygon':
                    this.isEditing = true
                    this.addTemp(e);
                    this.addTempPolygon()
                    break;

                default:
                    break;

            }
        });

    }


    /* method */

    setMethod(method: string): void {
        this.method = method
    }


    /* tmp functions */

    addTemp(e) {

        const { lat, lng } = e.latlng

        this.temp.push({
            lat, lng
        })

    }

    addTempPolyline() {

        this.clearTemp()
        this.addTempMarkers()

        const latlngs = [
            this.temp
        ]

        polyline(latlngs, { color: 'blue' }).addTo(this.tempGroup)

    }

    addTempPolygon() {

        this.clearTemp()
        this.addTempMarkers()

        const latlngs = [
            this.temp
        ]

        polygon(latlngs, { color: 'blue' }).addTo(this.tempGroup);

    }
    
    addTempMarkers() {

        let myIcon = icon({
            iconUrl: '/assets/maps/marker-editing.png',
            iconAnchor: [4.5, 4.5],
        });

        this.temp.forEach((point) => {
            marker([point.lat, point.lng], { icon: myIcon }).addTo(this.tempGroup);
        })


    }

    clearTemp() {
        this.tempGroup.clearLayers()
    }



    /* add layers to group */

    addMarker(e) {

        console.log(e.latlng)

        let myIcon = icon({
            iconUrl: '/assets/maps/marker.png',
            iconAnchor: [4.5, 4.5],
        });

        marker([e.latlng.lat, e.latlng.lng], { icon: myIcon }).addTo(this.layers[this.selectedLayer].group);

    }

    addPolyline() {

        const latlngs = [
            this.temp
        ]

        polyline(latlngs, { color: '#3f51b5' }).addTo(this.layers[this.selectedLayer].group);

    }

    addPolygon() {

        const latlngs = [
            this.temp
        ]

        polygon(latlngs, { color: '#3f51b5' }).addTo(this.layers[this.selectedLayer].group);

    }



    /* layers aka: groups */

    addLayer(): void {

        this.layers.push({
            name: this.newLayerTitle,
            group: layerGroup().addTo(this.map)
        })

        this.newLayerTitle = ''

    }

    removeLayer(layer: Layer): void {
        this.layers.splice(this.layers.indexOf(layer), 1);
    }

    selectLayer(index: number): void {
        this.selectedLayer = index;
    }

    clearLayer(index: number): void {
        this.layers[index].group.clearLayers()
    }

    clear(): void {
        this.layers.forEach((layer: Layer) => {
            layer.group.clearLayers()
        })

        this.layers.length = 0
    }

}
