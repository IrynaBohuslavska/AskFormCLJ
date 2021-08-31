(ns diplomaform.middleware
  (:require
   [ring.middleware.params :refer [wrap-params]]
   [prone.middleware :refer [wrap-exceptions]]
   [ring.middleware.reload :refer [wrap-reload]]
   [ring.middleware.defaults :refer [api-defaults wrap-defaults]]))

(def middleware
  [#(wrap-defaults % api-defaults)
   wrap-exceptions
   wrap-reload])
