import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

const Maps = () => {
    const position = { lat: 53.54, lng: 10 };
    const [open, setOpen] = useState(false);

    return (
        <APIProvider apiKey="AIzaSyAKrkml7EdvViYbkYpiDW0R4jeeiyD8lU4">
            <div style={{ height: "100vh", width: "100%" }}>
                <Map zoom={9} center={position}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <Pin background={"grey"} borderColor={"green"} glyphColor={"purple"} />
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>I'm in Hamburg</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
};

export default Maps;
