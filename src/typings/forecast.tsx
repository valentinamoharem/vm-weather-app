export default interface Forecast {
    city_name: String;
    data: [
        {valid_date: String,
        max_temp: String,
        min_temp: String,
        weather: {
            icon: String,
            description: String,
        },
        sunrise_ts: Number,
        sunset_ts: Number,}
    ]
}