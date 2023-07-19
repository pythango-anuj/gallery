from django.urls import path
from .views import login_view, GoogleLogin, Logout, register_view

urlpatterns = [
    path('api/login/', login_view, name='login'),
    path('api/login/google/', GoogleLogin.as_view(), name='google_login'),
    path('api/logout/', Logout.as_view(), name='logout'),
    path('api/register/', register_view, name='register'),

]
