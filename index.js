// Sample of TOP 500
const ratingGrossMovieData = [
    { x: 93, y: 2834, title: "The Shawshank Redemption" },
    { x: 92, y: 13497, title: "The Godfather" },
    { x: 90, y: 573, title: "The Godfather: Part II" },
    { x: 89, y: 969, title: "Schindler's List" },
    { x: 89, y: 10793, title: "Pulp Fiction" },
    { x: 89, y: 377, title: "12 Angry Men" },
    { x: 88, y: 33025, title: "Forrest Gump" },
    { x: 88, y: 29048, title: "Star Wars: Episode V" },
    { x: 88, y: 4684, title: "Goodfellas" },
    { x: 87, y: 1120, title: "One Flew Over the Cuckoo's Nest" },
    { x: 87, y: 4635, title: "Seven Samurai" },
    { x: 86, y: 32274, title: "Star Wars: Episode IV" },
    { x: 86, y: 13074, title: "The Silence of the Lambs" },
    { x: 86, y: 21654, title: "Saving Private Ryan" },
    { x: 86, y: 10013, title: "Se7en" },
    { x: 85, y: 20484, title: "Terminator 2: Judgment Day" },
    { x: 85, y: 42278, title: "The Lion King" },
    { x: 85, y: 2334, title: "The Usual Suspects" },
    { x: 85, y: 320, title: "Psycho" },
    { x: 85, y: 102, title: "Casablanca" },
    { x: 78, y: 65933, title: "Titanic" },              
    { x: 81, y: 165, title: "Trainspotting" },
    { x: 83, y: 159, title: "Citizen Kane" },
    { x: 81, y: 3287, title: "Blade Runner" },
    { x: 84, y: 24816, title: "Indiana Jones and the Raiders of the Lost Ark" },
    { x: 76, y: 93666, title: "Star Wars: Ep VII - Force Awakens" },
    { x: 80, y: 62330, title: "The Avengers" },
    { x: 79, y: 76050, title: "Avatar" }
];

// Rating vs gross
function initRatingGrossChart() {
    const ctx = document.getElementById('ratingGrossMovieChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Movies (Top ranking)',
                data: ratingGrossMovieData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            let point = context.raw;
                            return `${point.title}: Rating ${point.x}, $${point.y}`;
                        }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'Rating IMDB' }, min: 70, max: 100 },
                y: { title: { display: true, text: 'Gross ($)' }, beginAtZero: true }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRatingGrossChart();
});
