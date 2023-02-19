import React from "react";
import Versionlog from "../components/Versionlog";

function Version() {
  return (
    <div className=" mt-16 w-full p-4 flex flex-col gap-5 items-center justify-center">
      <p className="text-xl font-semibold ">Versionshinweise</p>

      <Versionlog
        date="19.02.2023"
        version="0.1.2"
        changes={["Versionsänderungen in eigener JSX Komponente ausgelagert."]}
      />

      <Versionlog
        date="18.02.2023"
        version="0.1.1"
        changes={['Seite "Versionshinweise" erstellt', "Navigation angepasst"]}
      />

      <Versionlog
        date="17.02.2023"
        version="0.1.0"
        changes={[
          'doubleTap auf eine Aufgabe um Prio zu ändern.',
          'PrioIcon zu AppIcon geändert',
          'Bugfix: PrioIcon ändert größe.'
        ]}
      />
    </div>
  );
}

export default Version;
