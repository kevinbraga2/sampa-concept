"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AppointmentGrid from "@/components/ui/AppointmentGrid";
 
export default function EnterpriseAppointmentsPage() {

    return (
        <DashboardLayout>
            <div className="space-y-8">
                <AppointmentGrid />
            </div>
        </DashboardLayout>
    );
}
