export class Routing {
    /**
     * @desc Изменяет маршрут к текущему местоположению
     * @param {string} route - Текущий маршрут
     * @param {Object} data - Объект данных
     */
    navigate(route, data = null) {
        location.appData = data;
        location.hash = route;
    }
}