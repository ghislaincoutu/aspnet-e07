using aspnet07.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var raw = builder.Configuration.GetConnectionString("DefaultConnection");

var connectionString = raw
.Replace("{database31}", Environment.GetEnvironmentVariable("database31"))
.Replace("{user31}", Environment.GetEnvironmentVariable("user31"))
.Replace("{password31}", Environment.GetEnvironmentVariable("password31"));

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddControllers();
var app = builder.Build();

app.MapControllers();
app.Run();
