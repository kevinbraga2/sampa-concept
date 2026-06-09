"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AppointmentGrid from "@/components/ui/AppointmentGrid";
import { getServices, getSchedules } from "@/app/actions";
import { useEffect, useState} from "react";
 
 
export default function EnterpriseAppointmentsPage() {

    const [schedules, setSchedules] = useState<string[]>([]);
    const [services, setServices] = useState<string[]>([])
    
    useEffect(() => {
        //getSchedules().then(setSchedules);
        //getServices().then(setServices);
    }, []);
    
    console.log(schedules)

    return (
        <DashboardLayout>
            <div className="space-y-8">
                <AppointmentGrid />
            </div>
        </DashboardLayout>
    );
}
