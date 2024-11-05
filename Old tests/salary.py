
from datetime import datetime, timedelta

# Creating a specific time
optimal_login = datetime.strptime("3:45", "%H:%M")
logout_time = datetime.strptime("00:00", "%H:%M")

time_in_str = "4:00"
time_out_str = "12:00"

time_in = datetime.strptime(time_in_str, "%H:%M")
time_out = datetime.strptime(time_out_str, "%H:%M")




total_login_hours = time_out - time_in



print(total_login_hours)






