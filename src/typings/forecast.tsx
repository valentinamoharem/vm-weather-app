export default interface Forecast {
    [x: string]: any;
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