4 years, 68 days, 3 hours and 4 minutes
4 years, 68 days, 3 hours, 4 minutes

((year==0)? '' : (year==1)? (year + 'year,') : (year + 'years,')) +
((day==0)? '' : (day==1)? (day + 'day,') : (day + 'days,')) + 
((hour==0)? '' :(hour==1)? (hour + 'hour') : (hour + 'hours')) +
((minute!=0 && seconds==0 || minute==0 && seconds!=0)? ' and ' : ((seconds==0 && minute==0)? '' : ', ')) +
((seconds==0)? '' : (seconds==1)? (seconds+'second'): (seconds+'seconds'))