from django.contrib import admin
from .models import Contact

# admin.site.register(Contact)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    # This makes the admin table look like a real dashboard
    list_display = ('name', 'email', 'phone', 'created_at') 
    list_filter = ('created_at',) # Adds a sidebar filter by date
    search_fields = ('name', 'email') # Adds a search bar
    ordering = ('-created_at',) # Shows newest messages at the top

