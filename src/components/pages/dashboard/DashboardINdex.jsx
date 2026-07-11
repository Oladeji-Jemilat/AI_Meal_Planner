
import { WeeklyFitnessPlan } from "../../../components/ui/WeeklyFitnessPlan";

function ProfilePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* <Header /> */}
            <main className="container mx-auto px-4 py-8">
                {/* <ProfileCard /> */}
                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        {/* <StatsGrid /> */}
                        {/* <ActivityHistory /> */}
                        <WeeklyFitnessPlan />
                    </div>
                    <div>
                        {/* <AchievementSection /> */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage