module.exports = app => {
   app.post('/signup', app.api.user.save)
   app.post('/signin', app.api.auth.signin)

   app.route('/tarefas')
      .all(app.config.passport.authenticate())
      .get(app.api.task.getTasks)
      .post(app.api.task.save)
      .put(app.api.task.toggleTask)

   app.route('/tarefas/:id')
      .all(app.config.passport.authenticate())
      .delete(app.api.task.remove)

   app.route('/tarefas/:id/toggle')
      .all(app.config.passport.authenticate())
      .put(app.api.task.toggleTask)
}
