import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Customer = () => {
  const { search } = useLocation()

  const lat = search.split('&')[0].split('=')[1]
  const long = search.split('&')[1].split('=')[1]

  useEffect(() => {
    // its MY KEY TAKE CAREFUL!
    window.L.mapquest.key = 'qN8yFAfcgITyg2fsA7qZ1A7oAv1TcGTq'

    var map = window.L.mapquest.map('map', {
      center: [lat, long],
      layers: window.L.mapquest.tileLayer('map'),
      zoom: 12
    })

    map.addControl(window.L.mapquest.control())
  }, [])
  return (
    <div id="map" style={{ width: '100%', height: '530px' }}>
      Customer
    </div>
  )
}

export default Customer
