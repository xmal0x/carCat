'use client'

import {CarCatalog, Hero} from "@/components";
import {useRef} from "react";

export default function Home() {
    const catalogRef = useRef(null);

    return (
        <main className="overflow-hidden">
            <Hero catalogRef={catalogRef}/>
            <CarCatalog catalogRef={catalogRef}/>
        </main>
    )
}
